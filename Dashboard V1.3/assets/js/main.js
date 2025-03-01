//DESKROP SIDEBAR SCRIPT
window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    searchBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-x"); // Change to 'X' icon
        } else {
            closeBtn.classList.replace("bx-x", "bx-menu"); // Change back to menu icon
        }
    }
    
}



//STUDENT CHEVRON DROPDOWN SCRIPT
//student dropdown chevron
const toggle = document.querySelector('.dropdown-toggle');
const content = document.querySelector('.dropdown-content');

toggle.addEventListener('click', (event) => {
    content.classList.toggle('show');
    event.stopPropagation(); // Prevent click event from propagating to the document
});

document.addEventListener('click', (event) => {
    if (!content.contains(event.target) && !toggle.contains(event.target)) {
        content.classList.remove('show');
    }
});



//STUDENT DROPDOWN SCRIPT
//chevron continuation
document.querySelector('.dropdown-container').addEventListener('mouseover', function () {
    const icon = this.querySelector('.navbar-items2 i');
    icon.classList.remove('fa-chevron-down');
    icon.classList.add('fa-chevron-up');
});

document.querySelector('.dropdown-container').addEventListener('mouseout', function () {
    const icon = this.querySelector('.navbar-items2 i');
    icon.classList.remove('fa-chevron-up');
    icon.classList.add('fa-chevron-down');
});



//MOBILE OVERLAY MENU SCRIPT
// Declare variables
const menubtn = document.getElementById('menu-btn');
const closebtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Open overlay when menu button is clicked
menubtn.addEventListener('click', () => {
    overlay.classList.add('open');
    document.body.classList.add('overlay-open'); // Disable scrolling
});

// Close overlay when close button is clicked
closebtn.addEventListener('click', () => {
    overlay.classList.remove('open');
    document.body.classList.remove('overlay-open'); // Enable scrolling
});

// Close overlay when clicking outside of it
document.addEventListener('click', (e) => {
    if (overlay.classList.contains('open') && !overlay.contains(e.target) && e.target !== menubtn) {
        overlay.classList.remove('open');
        document.body.classList.remove('overlay-open'); // Enable scrolling
    }
});



//SCROLL BUTTON SCRIPT
// Select the scroll-to-top button
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Add click event listener to scroll to the top
scrollToTopBtn.addEventListener('click', () => {
  // Change opacity to full when clicked
  scrollToTopBtn.style.opacity = '1';

  // Scroll to the top of the page
  window.scrollTo({
    top: 0,          // Scroll to the top of the page
    behavior: 'smooth' // Enables smooth scrolling
  });

  // Reset opacity to low after a slight delay
  setTimeout(() => {
    scrollToTopBtn.style.opacity = '0.5'; // Return to low opacity
  }, 1000); // Adjust delay if needed (1000ms = 1 second)
});



//LOADER SCRIPT
//loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide the loader after the page loads
  });

  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide the loader after the page loads
  });
    


//LI AND A TAG ACTIVATION SCRIPT
// Select all the <li> elements
const listItems = document.querySelectorAll('li');
// Loop through each <li> and add a click event listener
listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Find the <a> inside the clicked <li>
        const link = item.querySelector('a');
        
        // If the <a> exists, simulate a click on it
        if (link) {
            link.click();
        }
    });
});


//PAYMENTS INNER TABS SCRIPT
//inner Tabs scripts
        // Select all tab links and content
        const tabLinks = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-content');

        // Add click event to each tab link
        tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior

                // Remove active class from all tabs and contents
                tabLinks.forEach(tab => tab.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked tab and corresponding content
                link.classList.add('active');
                const target = document.querySelector(link.getAttribute('href'));
                target.classList.add('active');
            });
        });


//COURSES SESSION INNER TABS
/* adjust script so that when inner tabs are switched it will reload*/
const classSelector = document.getElementById('classSelector');
const classContents = document.querySelectorAll('.class-content');
const placeholder = document.getElementById('placeholder');

classSelector.addEventListener('change', () => {
    // Hide all class contents
    classContents.forEach(content => content.classList.remove('active'));
    placeholder.style.display = 'none';

    const selectedClass = document.getElementById(`class-${classSelector.value}`);
    if (selectedClass) {
        selectedClass.classList.add('active');

        // Activate the first tab by default
        const tabs = selectedClass.querySelectorAll('.tab');
        const tabContents = selectedClass.querySelectorAll('.tab-content');
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        tabs[0].classList.add('active');
        tabContents[0].classList.add('active');
    } else {
        // Show placeholder if no class is selected
        placeholder.style.display = 'block';
    }
});

// Tab functionality
document.querySelectorAll('.tabs').forEach(tabContainer => {
    const tabs = tabContainer.querySelectorAll('.tab');
    const contents = tabContainer.parentElement.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            const target = tab.dataset.target;
            document.getElementById(target).classList.add('active');
        });
    });
});  

