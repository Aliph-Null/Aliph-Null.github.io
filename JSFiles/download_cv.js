function download_CV_PDF(){
    // Create a link element
    var link = document.createElement("a");
    link.href = "path/to/your/file.pdf"; // Replace with the actual path to your PDF file
    link.download = "your-filename.pdf"; // Replace with the desired filename

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
}