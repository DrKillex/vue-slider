const { createApp } = Vue

createApp({
    data() {
        return {
            interval: '',
            myClasses: 'active',            
            counter: 0,                       
            slides: [
                {
                    image: 'img/01.webp',
                    alt: 'spiderman',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    alt: 'Ratchet & Clank',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    alt: 'Fortnite',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    alt: 'Stray',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    alt: 'Avengers',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        nextImg(){
            this.counter++;
            if (this.counter > this.slides.length -1){
                this.counter = 0
            }
        },
        prevImg(){
            this.counter--;
            if (this.counter < 0){
                this.counter = this.slides.length - 1
            }
        },
        activeImg(index){
            this.counter = index
        },
        imgSelected(index){
            if (index === this.counter){
                return true
            }
            return false
        },
        autoPlayOn(){
            interval = setInterval(() => {
                this.nextImg()
            }, 3000);
        },  
        autoPlayOff(){
            clearInterval(interval)
        }      
    },
    mounted(){
        this.autoPlayOn()
    }
}).mount('#app')
