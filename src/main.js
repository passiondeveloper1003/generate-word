document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }


// let button = document.getElementById("button");
// let makepdf = document.getElementById("makepdf");

// button.addEventListener("click", function () {
//     let mywindow = window.open("", "PRINT", 
//             "height=400,width=600");

//     mywindow.document.write(makepdf.innerHTML);

//     mywindow.document.close();
//     mywindow.focus();

//     mywindow.print();
//     mywindow.close();

//     return true;
// });

var specialElementHandlers = {
  '#editor': function (element,renderer) {
      return true;
  }
};

var downlodButton = document.getElementById('downloadPdf');
downlodButton.addEventListener('click', function() {
  // window.jsPDF = window.jspdf.jsPDF;
		// var pdf = new jsPDF('p', 'pt', 'letter');
		// pdf.html(document.getElementById('makepdf'), {
		// 	callback: function (pdf) {
    //     pdf.save('sample-file.pdf');
		// 		// var iframe = document.createElement('iframe');
		// 		// iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
		// 		// document.body.appendChild(iframe);
		// 		// iframe.src = pdf.output('datauristring');
		// 	}
		// });
var pdf = new jsPDF();
console.log(pdf);
var element = document.getElementById('makepdf');

pdf.addHTML( element, function(){ pdf.save('sample-file.pdf'); }
);

// pdf.fromHTML(element);
// pdf.save('sample-file.pdf');
// console.log(element);
// html2pdf().from(element).save('filename.pdf');
});
