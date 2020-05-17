import html2pdf from 'html2pdf.js'

const options = {
    margin: 5
}
html2pdf().set(options).from(document.body).save();

