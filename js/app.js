$(document).on("click", ".show-password", function (_e) {
    _e.preventDefault();

    let clicked = $(this);
    let inputId = clicked.attr("data-id");
    let input = $(inputId);
    let type = input.attr("type");
    if (type === "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

$(document).ready(function () {
    $('.passworddiv span').on('click', function () {
        $('input').toggleClass('active');
        if ($('input').hasClass('active')) {
            $(this).attr('class', "fa fa-eye ")
                .prev('input').attr('type', "text");
        } else {
            $(this).attr('class', "fa fa-eye-slash ")
                .prev('input').attr('type', 'password');
        }
    });
});


function CheckPermission(permissoin) {
    if (!abp.auth.isGranted(permissoin)) {
        abp.notify.error(abp.localization.localize("Error:NotAuthorizedMessage"), abp.localization.localize('Error:NotAuthorized'));
        return false;
    }
    return true;
};

$(".darkmode").click(function () {
    $("body").toggleClass("body--grayscale");
});


$(".beta").on("click", function () {
    $("body").addClass("red");

});



$(".navInquirybtn  ").click(function () {
    $(".seqrchoverlay").toggleClass("d-block");
    $(".InquiryContainer").toggleClass("d-block");
});



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

    responsive: [
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },

        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

$('.Most__Used__Services').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    rtl: true,

    responsive: [
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },

        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

let Resizefont = document.querySelector(".Resizefont");
let btn = Resizefont.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    })
}



$(".btn-12, .btn-14, .btn-16").on("click", function () {
    const fontSize = $(this).data("font-size") + "px";
    $("body").css("font-size", fontSize);
    $(".page__title h3, .tablecontainer .table tr th, .tablecontainer .table tr td, .btn, label, a, a span, .content__user__area--name").css("font-size", fontSize);
});



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

// change for all system
$(".btn-change-font").on("click", function () {
    var fontSize = $(this).data("font-size");
    $(".page__title h3, .tablecontainer .table tr th, .tablecontainer .table tr td, .btn, label, a, a span, .content__user__area--name").css("font-size", fontSize);
});

// end change for all system

$(".btn-change-font").on("click", function () {
    var fontSize = $(this).data("font-size");
    $(".changeaccessibility").css("font-size", fontSize);
});

$(".sun").on("click", function () {
    $(".changeaccessibility").toggleClass("textchangebg");
});




$(".anotherFont").on("click", function () {
    $("body").toggleClass("cairo");
});
$(".defualtFont").on("click", function () {
    $("body").toggleClass("defualtFont");
});







if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
    const toggleBtn = document.querySelector('.js-toggle-fullscreen-btn');

    const styleEl = document.createElement('link');
    styleEl.setAttribute('rel', 'stylesheet');

    styleEl.addEventListener('load', function () {
        toggleBtn.hidden = false;
    });
    document.head.appendChild(styleEl);

    toggleBtn.addEventListener('click', function () {
        if (document.fullscreen) {
            document.exitFullscreen();
        } else if (document.webkitFullscreenElement) {
            document.webkitCancelFullScreen()
        } else if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.documentElement.webkitRequestFullScreen();
        }
    });

    document.addEventListener('fullscreenchange', handleFullscreen);
    document.addEventListener('webkitfullscreenchange', handleFullscreen);


    function handleFullscreen() {
        if (document.fullscreen || document.webkitFullscreenElement) {
            toggleBtn.classList.add('on');
            toggleBtn.setAttribute('aria-label', 'Exit fullscreen mode');
        } else {
            toggleBtn.classList.remove('on');
            toggleBtn.setAttribute('aria-label', 'Enter fullscreen mode');
        }
    }
}

const colorInput = document.getElementById("colorpicker");

colorInput.addEventListener("input", (e) => {
    document.body.style.setProperty("--color_change", e.target.value);
});


const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box");


if (toggle) {
    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("close");
    })
        ;

}


let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}



// Select Upload-Area
const uploadArea = document.querySelector('#uploadArea')

// Select Drop-Zoon Area
const dropZoon = document.querySelector('#dropZoon');

// Loading Text
const loadingText = document.querySelector('#loadingText');

// Slect File Input 
const fileInput = document.querySelector('#fileInput');

// Select Preview Image
const previewImage = document.querySelector('#previewImage');

// File-Details Area
const fileDetails = document.querySelector('#fileDetails');

// Uploaded File
const uploadedFile = document.querySelector('#uploadedFile');

// Uploaded File Info
const uploadedFileInfo = document.querySelector('#uploadedFileInfo');

// Uploaded File  Name
const uploadedFileName = document.querySelector('.uploaded-file__name');

// Uploaded File Icon
const uploadedFileIconText = document.querySelector('.uploaded-file__icon-text');

// Uploaded File Counter
const uploadedFileCounter = document.querySelector('.uploaded-file__counter');

// ToolTip Data
const toolTipData = document.querySelector('.upload-area__tooltip-data');

// Images Types
const imagesTypes = [
    "jpeg",
    "png",
    "svg",
    "gif"
];

// Append Images Types Array Inisde Tooltip Data
if (toolTipData)
    toolTipData.innerHTML = [...imagesTypes].join(', .');

// When (drop-zoon) has (dragover) Event 
if (dropZoon)
    dropZoon.addEventListener('dragover', function (event) {
        // Prevent Default Behavior 
        event.preventDefault();

        // Add Class (drop-zoon--over) On (drop-zoon)
        dropZoon.classList.add('drop-zoon--over');
    });

// When (drop-zoon) has (dragleave) Event 
if (dropZoon)
    dropZoon.addEventListener('dragleave', function (event) {
        // Remove Class (drop-zoon--over) from (drop-zoon)
        dropZoon.classList.remove('drop-zoon--over');
    });

// When (drop-zoon) has (drop) Event 
if (dropZoon)
    dropZoon.addEventListener('drop', function (event) {
        // Prevent Default Behavior 
        event.preventDefault();

        // Remove Class (drop-zoon--over) from (drop-zoon)
        dropZoon.classList.remove('drop-zoon--over');

        // Select The Dropped File
        const file = event.dataTransfer.files[0];

        // Call Function uploadFile(), And Send To Her The Dropped File :)
        uploadFile(file);
    });

// When (drop-zoon) has (click) Event 
if (dropZoon)
    dropZoon.addEventListener('click', function (event) {
        // Click The (fileInput)
        fileInput.click();
    });

// When (fileInput) has (change) Event 
if (fileInput)
    fileInput.addEventListener('change', function (event) {
        // Select The Chosen File
        const file = event.target.files[0];

        // Call Function uploadFile(), And Send To Her The Chosen File :)
        uploadFile(file);
    });

// Upload File Function
function uploadFile(file) {
    // FileReader()
    const fileReader = new FileReader();
    // File Type 
    const fileType = file.type;
    // File Size 
    const fileSize = file.size;

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
    } else { // Else

        this; // (this) Represent The fileValidate(fileType, fileSize) Function

    };
};

// Progress Counter Increase Function
function progressMove() {
    // Counter Start
    let counter = 0;

    // After 600ms 
    setTimeout(() => {
        // Every 100ms
        let counterIncrease = setInterval(() => {
            // If (counter) is equle 100 
            if (counter === 100) {
                // Stop (Counter Increase)
                clearInterval(counterIncrease);
            } else { // Else
                // plus 10 on counter
                counter = counter + 10;
                // add (counter) vlaue inisde (uploadedFileCounter)
                uploadedFileCounter.innerHTML = `${counter}%`
            }
        }, 100);
    }, 600);
};


// Simple File Validate Function
function fileValidate(fileType, fileSize) {
    // File Type Validation
    let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);

    // If The Uploaded File Type Is 'jpeg'
    if (isImage[0] === 'jpeg') {
        // Add Inisde (uploadedFileIconText) The (jpg) Value
        uploadedFileIconText.innerHTML = 'jpg';
    } else { // else
        // Add Inisde (uploadedFileIconText) The Uploaded File Type 
        uploadedFileIconText.innerHTML = isImage[0];
    };

    // If The Uploaded File Is An Image
    if (isImage.length !== 0) {
        // Check, If File Size Is 2MB or Less
        if (fileSize <= 2000000) { // 2MB :)
            return true;
        } else { // Else File Size
            return alert('Please Your File Should be 2 Megabytes or Less');
        };
    } else { // Else File Type 
        return alert('Please make sure to upload An Image File Type');
    };
};





$(document).ready(function () {

    showLoader = () => {
        $("#loaderDiv").css("display", "block");
    }

    hideLoader = () => {
        $("#loaderDiv").css("display", "none");
    }

    //Um Al Qura - تقويم أم القرى
    displayDateHjConfig = (gregDate) => {
        moment.locale('ar-sa');
        // Parse the Gregorian date string into a moment object
        var gregorianDate = moment(gregDate, "YYYY-MM-DDTHH:mm:ss");
        // Convert to Hijri (Islamic) calendar
        var hijriDate = gregorianDate.format("iD iMMMM iYYYY هـ");
        return hijriDate;
    }

    extractTimeFromDate = (gregDate) => {
        moment.locale('ar');
        // Parse the Gregorian date string into a moment object
        var gregorianDate = moment(gregDate);

        // Check if the date is valid
        if (!gregorianDate.isValid()) {
            return "Invalid date";
        }

        // Format and return the time part (hours and minutes)
        var time = gregorianDate.format("h:mm a");

        return time;
    }
    getDayFromDate = (gregDate) => {
        moment.locale('ar');
        // Parse the Gregorian date string into a moment object
        var gregorianDate = moment(gregDate);

        // Check if the date is valid
        if (!gregorianDate.isValid()) {
            return "Invalid date";
        }

        // Get and return the day of the week in Arabic
        var day = gregorianDate.format("dddd");

        return day;
    }


    $.ajaxSetup({
        beforeSend: function (res) {

        },
        complete: function (res) {

        },
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 404) {
                console.log("Element not found.");
                console.log("Error: " + textStatus + ": " + errorThrown);
            }
            if (jqXHR.status == 401) {
                console.log(abp.currentUser);
                if (abp.currentUser && abp.currentUser.isAuthenticated) {
                    console.log("not has permission");
                }
                console.log("Error: " + textStatus + ": " + errorThrown);
                window.location.href = baseUrl + "/account/login";

            } else {
                console.log("Error: " + textStatus + ": " + errorThrown);
            }
        }
    });




    previewModalByGetFileFunction = async (getfileFunction) => {
        try {
            const file = await Promise.resolve(getfileFunction());  // Ensure it's a Promise
            const objToString = JSON.stringify(file);
            $("#previewFileId").val(objToString);
            $('#IframeViewer').modal('show');
        } catch (error) {
            console.error("Error:", error);
            // Handle the error as needed
        }
    }

    previewModal = (id) => {
        const objToString = JSON.stringify(id);  // convert object to string
        $("#previewFileId").val(objToString);
        $('#IframeViewer').modal('show');
    }

    function isNumberNotEmpty(value) {
        // Check if the value is not empty
        if (value === null || value === undefined || value === '') {
            return false;
        }

        // Check if the value is a number
        return !isNaN(value);
    }
    function isObjectNotEmpty(obj) {
        // Check if the object is not null or undefined
        if (obj === null || obj === undefined) {
            return false;
        }

        // Check if the object has any keys
        return Object.keys(obj).length > 0;
    }
    $('#IframeViewer').on('show.bs.modal', function (e) {
        let id = $("#previewFileId").val();
        let loader = document.getElementById("previewLoader");
        let pdfID = document.getElementById("pdfID");
        let IframeViewerTitle = document.getElementById("IframeViewerTitle");
        loader.style.display = 'block';
        pdfID.style.display = 'none';


        if (isNumberNotEmpty(id)) // check if id is number and not empty
        {
            $.ajax({
                url: baseUrl + "/IntegrationLookup?handler=Preview&id=" + id,
                method: "Get",
                success: (data) => {
                    console.log(data);
                    loader.style.display = 'none';
                    pdfID.style.display = 'block';
                    IframeViewerTitle.innerText = data.fileName
                    if (pdfID) {
                        if (data.fileContent.startsWith("data"))
                            pdfID.src = data.fileContent;
                        else
                            pdfID.src = "data:" + data.contentType + ";base64," + data.fileContent;
                    }
                },
                error: function (error) {
                    // Handle error response if needed
                }
            });
        }
        else if (isObjectNotEmpty(id)) // check if  object and not empty
        {
            console.log(id);
            const obj = JSON.parse(id); // convert string  to object
            loader.style.display = 'none';
            pdfID.style.display = 'block';
            IframeViewerTitle.innerText = obj.fileName
            if (pdfID) {
                if (obj.fileContent.startsWith("data"))
                    pdfID.src = obj.fileContent;
                else
                    pdfID.src = "data:" + obj.contentType + ";base64," + obj.fileContent;
            }

        }

    })

});
