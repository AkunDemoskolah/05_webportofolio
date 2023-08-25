document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById("Download");
  
    downloadButton.addEventListener("click", function() {
        const cvPath = "gambar.pdf";
  
        const link = document.createElement("a");
        link.href = cvPath;
        link.download = "gambar.pdf";
        
  
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
  });
