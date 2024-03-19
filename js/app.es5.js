'use strict';

$(document).ready(function () {
    $('.passworddiv span').on('click', function () {
        $('input').toggleClass('active');
        if ($('input').hasClass('active')) {
            $(this).attr('class', "fa fa-eye ").prev('input').attr('type', "text");
        } else {
            $(this).attr('class', "fa fa-eye-slash ").prev('input').attr('type', 'password');
        }
    });
});

// $("#secuityCaseContainer").steps({
//     headerTag: ".wizerdlabel",
//     bodyTag: ".content",
//     transitionEffect: "slideLeft",
//     autoFocus: false,
//     enableAllSteps: false,
//     transitionEffectSpeed: 500,
//     enableContentCache: false,
//     // onFinishing: function() {
//     //     $('#summary').modal();
//     // },
//     labels: {
//         cancel: "حذف",
//         finish: "حفظ ",
//         next: "التالي",
//         previous: "العودة للخطوة السابقة",
//     }
// });

// $(".agreeBtn").click(function() {
//     $(".deliveryQuestion").fadeOut(100);
//     $(".succesDelivery").css('display', 'block');
// });

// $(".actions ul").append("<li class='deleteBtn'><a href='#' class='btn moi-btn--secondary--outline'>اغلاق الحالة <\/a><\/li>");
// $(".actions ul").append("<li class='saveCompleateLater'><a href='#'  class='moi-btn--text-icon'>حفظ واستكمال لاحقاً <\/a><\/li>");

//$('.homepage__category').slick({
//    slidesToShow: 4,
//    slidesToScroll: 1,
//    dots: true,
//    arrows: false,
//    autoplay: true,
//    autoplaySpeed: 6000,
//    rtl: true,

//    responsive: [
//        {
//            breakpoint: 1350,
//            settings: {
//                slidesToShow: 4,
//                slidesToScroll: 1,
//                infinite: true,
//                dots: true
//            }
//        },

//        {
//            breakpoint: 1300,
//            settings: {
//                slidesToShow: 2,
//                slidesToScroll: 1,
//                infinite: true,
//                dots: true
//            }
//        },
//        {
//            breakpoint: 600,
//            settings: {
//                slidesToShow: 2,
//                slidesToScroll: 2
//            }
//        },
//        {
//            breakpoint: 480,
//            settings: {
//                slidesToShow: 1,
//                slidesToScroll: 1
//            }
//        }

//    ]
//});

$('.Incoming__reports').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    rtl: true,

    responsive: [{
        breakpoint: 1350,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 1300,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});
$('.Most__Used__Services').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    rtl: true,

    responsive: [{
        breakpoint: 1350,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 1300,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

var Resizefont = document.querySelector(".Resizefont");
var btn = Resizefont.querySelectorAll(".btn");

for (var _i = 0; _i < btn.length; _i++) {
    btn[_i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

$(".btn-12").on("click", function () {

    $("body").css("font-size", "12px");

    $(".page__title h3").css("font-size", "10px");
    $(".tablecontainer .table tr th").css("font-size", "10px");
    $(".tablecontainer .table tr td").css("font-size", "10px");
    $(".btn").css("font-size", "10px");
    $("label").css("font-size", "10px");
    $("a").css("font-size", "10px");
    $("a span").css("font-size", "10px");
    $(".content__user__area--name").css("font-size", "10px");
});
$(".btn-14").on("click", function () {

    $("body").css("font-size", "12px");
    $(".page__title h3").css("font-size", "12px");
    $(".tablecontainer .table tr th").css("font-size", "12px");
    $(".tablecontainer .table tr td").css("font-size", "12px");
    $(".btn").css("font-size", "12px");
    $("label").css("font-size", "12px");
    $("a").css("font-size", "12px");
    $("a span").css("font-size", "12px");
});
$(".btn-16").on("click", function () {
    $("body").css("font-size", "18px");
    $(".page__title h3").css("font-size", "18px");
    $(".tablecontainer .table tr th").css("font-size", "18px");
    $(".tablecontainer .table tr td").css("font-size", "18px");
    $(".btn").css("font-size", "18px");
    $("label").css("font-size", "18px");
    $("a ").css("font-size", "18px");
    $("a span").css("font-size", "18px");
});

var changefont = document.querySelector(".changefont");
var font = changefont.querySelectorAll("font");

//for (let i = 0; i < font.length; i++) {
//    font[i].addEventListener("click", function () {
//        let current = document.getElementsByClassName("active");
//        current[0].className = current[0].className.replace("active", "");
//        this.className += " active";
//    })
//}

//$(".cairo").on("click", function () {

//    $("*").css("font-family", "Readex Pro");

//});

$(".anotherFont").on("click", function () {

    $("body").toggleClass("cairo");
});

$(".defualtFont").on("click", function () {

    $("body").toggleClass("defualtFont");
});

if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
    (function () {
        var handleFullscreen = function handleFullscreen() {
            if (document.fullscreen || document.webkitFullscreenElement) {
                toggleBtn.classList.add('on');
                toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode');
            } else {
                toggleBtn.classList.remove('on');
                toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode');
            }
        };

        var toggleBtn = document.querySelector('.js-toggle-fullscreen-btn');

        var styleEl = document.createElement('link');
        styleEl.setAttribute('rel', 'stylesheet');

        styleEl.addEventListener('load', function () {
            toggleBtn.hidden = false;
        });
        document.head.appendChild(styleEl);

        toggleBtn.addEventListener('click', function () {
            if (document.fullscreen) {
                document.exitFullscreen();
            } else if (document.webkitFullscreenElement) {
                document.webkitCancelFullScreen();
            } else if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else {
                document.documentElement.webkitRequestFullScreen();
            }
        });

        document.addEventListener('fullscreenchange', handleFullscreen);
        document.addEventListener('webkitfullscreenchange', handleFullscreen);
    })();
}

var colorInput = document.getElementById("colorpicker");

colorInput.addEventListener("input", function (e) {
    document.body.style.setProperty("--color_change", e.target.value);
});

var body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");

if (toggle) {
    toggle.addEventListener("click", function () {
        sidebar.classList.toggle("close");
    });
}

var arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", function (e) {
        var arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}

// Select Upload-Area
var uploadArea = document.querySelector('#uploadArea');

// Select Drop-Zoon Area
var dropZoon = document.querySelector('#dropZoon');

// Loading Text
var loadingText = document.querySelector('#loadingText');

// Slect File Input
var fileInput = document.querySelector('#fileInput');

// Select Preview Image
var previewImage = document.querySelector('#previewImage');

// File-Details Area
var fileDetails = document.querySelector('#fileDetails');

// Uploaded File
var uploadedFile = document.querySelector('#uploadedFile');

// Uploaded File Info
var uploadedFileInfo = document.querySelector('#uploadedFileInfo');

// Uploaded File  Name
var uploadedFileName = document.querySelector('.uploaded-file__name');

// Uploaded File Icon
var uploadedFileIconText = document.querySelector('.uploaded-file__icon-text');

// Uploaded File Counter
var uploadedFileCounter = document.querySelector('.uploaded-file__counter');

// ToolTip Data
var toolTipData = document.querySelector('.upload-area__tooltip-data');

// Images Types
var imagesTypes = ["jpeg", "png", "svg", "gif"];

// Append Images Types Array Inisde Tooltip Data
if (toolTipData) toolTipData.innerHTML = [].concat(imagesTypes).join(', .');

// When (drop-zoon) has (dragover) Event
if (dropZoon) dropZoon.addEventListener('dragover', function (event) {
    // Prevent Default Behavior
    event.preventDefault();

    // Add Class (drop-zoon--over) On (drop-zoon)
    dropZoon.classList.add('drop-zoon--over');
});

// When (drop-zoon) has (dragleave) Event
if (dropZoon) dropZoon.addEventListener('dragleave', function (event) {
    // Remove Class (drop-zoon--over) from (drop-zoon)
    dropZoon.classList.remove('drop-zoon--over');
});

// When (drop-zoon) has (drop) Event
if (dropZoon) dropZoon.addEventListener('drop', function (event) {
    // Prevent Default Behavior
    event.preventDefault();

    // Remove Class (drop-zoon--over) from (drop-zoon)
    dropZoon.classList.remove('drop-zoon--over');

    // Select The Dropped File
    var file = event.dataTransfer.files[0];

    // Call Function uploadFile(), And Send To Her The Dropped File :)
    uploadFile(file);
});

// When (drop-zoon) has (click) Event
if (dropZoon) dropZoon.addEventListener('click', function (event) {
    // Click The (fileInput)
    fileInput.click();
});

// When (fileInput) has (change) Event
if (fileInput) fileInput.addEventListener('change', function (event) {
    // Select The Chosen File
    var file = event.target.files[0];

    // Call Function uploadFile(), And Send To Her The Chosen File :)
    uploadFile(file);
});

// Upload File Function
function uploadFile(file) {
    // FileReader()
    var fileReader = new FileReader();
    // File Type
    var fileType = file.type;
    // File Size
    var fileSize = file.size;

    // If File Is Passed from the (File Validation) Function
    if (fileValidate(fileType, fileSize)) {
        // Add Class (drop-zoon--Uploaded) on (drop-zoon)
        dropZoon.classList.add('drop-zoon--Uploaded');

        // Show Loading-text
        loadingText.style.display = "block";
        // Hide Preview Image
        previewImage.style.display = 'none';

        // Remove Class (uploaded-file--open) From (uploadedFile)
        uploadedFile.classList.remove('uploaded-file--open');
        // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
        uploadedFileInfo.classList.remove('uploaded-file__info--active');

        // After File Reader Loaded
        fileReader.addEventListener('load', function () {
            // After Half Second
            setTimeout(function () {
                // Add Class (upload-area--open) On (uploadArea)
                uploadArea.classList.add('upload-area--open');

                // Hide Loading-text (please-wait) Element
                loadingText.style.display = "none";
                // Show Preview Image
                previewImage.style.display = 'block';

                // Add Class (file-details--open) On (fileDetails)
                fileDetails.classList.add('file-details--open');
                // Add Class (uploaded-file--open) On (uploadedFile)
                uploadedFile.classList.add('uploaded-file--open');
                // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
                uploadedFileInfo.classList.add('uploaded-file__info--active');
            }, 500); // 0.5s

            // Add The (fileReader) Result Inside (previewImage) Source
            previewImage.setAttribute('src', fileReader.result);

            // Add File Name Inside Uploaded File Name
            uploadedFileName.innerHTML = file.name;

            // Call Function progressMove();
            progressMove();
        });

        // Read (file) As Data Url
        fileReader.readAsDataURL(file);
    } else {
        // Else

        this; // (this) Represent The fileValidate(fileType, fileSize) Function
    };
};

// Progress Counter Increase Function
function progressMove() {
    // Counter Start
    var counter = 0;

    // After 600ms
    setTimeout(function () {
        // Every 100ms
        var counterIncrease = setInterval(function () {
            // If (counter) is equle 100
            if (counter === 100) {
                // Stop (Counter Increase)
                clearInterval(counterIncrease);
            } else {
                // Else
                // plus 10 on counter
                counter = counter + 10;
                // add (counter) vlaue inisde (uploadedFileCounter)
                uploadedFileCounter.innerHTML = counter + '%';
            }
        }, 100);
    }, 600);
};

// Simple File Validate Function
function fileValidate(fileType, fileSize) {
    // File Type Validation
    var isImage = imagesTypes.filter(function (type) {
        return fileType.indexOf('image/' + type) !== -1;
    });

    // If The Uploaded File Type Is 'jpeg'
    if (isImage[0] === 'jpeg') {
        // Add Inisde (uploadedFileIconText) The (jpg) Value
        uploadedFileIconText.innerHTML = 'jpg';
    } else {
        // else
        // Add Inisde (uploadedFileIconText) The Uploaded File Type
        uploadedFileIconText.innerHTML = isImage[0];
    };

    // If The Uploaded File Is An Image
    if (isImage.length !== 0) {
        // Check, If File Size Is 2MB or Less
        if (fileSize <= 2000000) {
            // 2MB :)
            return true;
        } else {
            // Else File Size
            return alert('Please Your File Should be 2 Megabytes or Less');
        };
    } else {
        // Else File Type
        return alert('Please make sure to upload An Image File Type');
    };
};

$(document).ready(function () {

    showLoader = function () {
        $("#loaderDiv").css("display", "block");
    };

    hideLoader = function () {
        $("#loaderDiv").css("display", "none");
    };

    $.ajaxSetup({
        beforeSend: function beforeSend(res) {},
        complete: function complete(res) {}
    });
});

