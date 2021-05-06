// this script has been created for the blog page.
// Created by Viacheslav Rawles 
// References
// Stack Overflow. 2013. Automatically close all the other <details> tags after opening a specific <details> tag. [online] Available at: <https://stackoverflow.com/questions/16751345/automatically-close-all-the-other-details-tags-after-opening-a-specific-detai> [Accessed 5 May 2021].

// details elements were originally all able to be opened at once causing content of the details at the bottom to be pushed out and hidden.
// this script makes it so when a widget is toggled to open and then you open another widget the previously open widget is automatically closed. 

// variable for all details elements.
var details_elements = document.querySelectorAll('details');

// add an event listener for each widget
details_elements.forEach(widget=> {
    widget.addEventListener('toggle', keep1open)
})

// close widget when a widget is opened
function keep1open() {
    if (this.open) {
        details_elements.forEach(widget=>{
            if (widget!=this &&widget.open) widget.open = false
        });
    }
}