const { generatePDF } = require('oringena');
const fs = require('fs').promises;

async function createAndSavePDF() {
    try {
        const pdfBytes = await generatePDF();
        await fs.writeFile('example.pdf', pdfBytes);
        console.log('PDF generated and saved successfully as "example.pdf"');
    } catch (error) {
        console.error('Error generating PDF:', error);
    }
}

createAndSavePDF();
