import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { TestData } from "../types";

export const generatePDF = async (data: TestData) => {
  const element = document.querySelector(".results-container") as HTMLElement;
  if (!element) return;

  try {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    // PDF dimensions
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 10; // 10mm margins

    // Capture the content sections separately
    const sections = [
      document.querySelector(".results-container > div:nth-child(1)"), // Results
      document.querySelector(".results-container > div:nth-child(2)"), // Education
      document.querySelector(".results-container > div:nth-child(3)"), // Career
    ];

    let currentY = margin;

    // Add title
    pdf.setFontSize(20);
    pdf.setTextColor(0, 0, 0);
    pdf.text("Big Five Personality Test Results", margin, currentY);
    currentY += 15;

    // Add participant name
    pdf.setFontSize(16);
    pdf.text(`Results for: ${data.participantName}`, margin, currentY);
    currentY += 20;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (!section) continue;

      const canvas = await html2canvas(section as HTMLElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
        windowWidth: 1024,
      });

      // Calculate dimensions to fit within margins
      const availableWidth = pageWidth - 2 * margin;
      const scaleFactor = availableWidth / canvas.width;
      const imgWidth = canvas.width * scaleFactor;
      const imgHeight = canvas.height * scaleFactor;

      // Check if we need a new page
      if (currentY + imgHeight > pageHeight - margin) {
        pdf.addPage();
        currentY = margin;
      }

      // Add the image
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData, "JPEG", margin, currentY, imgWidth, imgHeight);
      currentY += imgHeight + 10; // Add some spacing between sections
    }

    // Add footer
    const timestamp = new Date().toLocaleDateString();
    pdf.setFontSize(10);
    pdf.setTextColor(128, 128, 128);
    pdf.text(`Generated on ${timestamp}`, margin, pageHeight - margin);

    pdf.save(
      `personality-test-results-${data.participantName
        .toLowerCase()
        .replace(/\s+/g, "-")}.pdf`
    );
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};
