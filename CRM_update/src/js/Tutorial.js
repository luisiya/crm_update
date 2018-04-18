class Tutorial {
    constructor(contentHtml) {
        this.contentHtml = contentHtml;
        // this.sidebarHtml = document.querySelector('#js-tutorial-sidebar').textContent.trim();
        this.triggerBtn = document.querySelector('#js-menu-tutorials');
		this.currentBtn = this.triggerBtn.querySelector('.burger-menu__item');
        this.triggerBtn.addEventListener('click', () => this.render());
    };
    render(){
        this.target = event.target;
		this.prev = document.querySelector(".burger-menu__item--selected");
		if((typeof this.prev !== "undefined") && (this.prev !== this.target)){
			this.prev.classList.remove("burger-menu__item--selected");
		}
		this.currentBtn.classList.add("burger-menu__item--selected");
        document.querySelector('.content').innerHTML = this.contentHtml;
        new Likecounter();
    }
}

let tutorialPageHtml = document.querySelector('#js-tutorial-content').textContent.trim();
let tutorialPage = new Tutorial(tutorialPageHtml);
