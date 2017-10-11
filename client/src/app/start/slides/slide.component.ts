import { SlideService } from './slide.service';
import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';

//Import image interface
import { Slide } from './slide.model';
declare var $;

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['slide.component.css'],
})
export class SlideComponent implements OnInit, OnChanges {
    slides: Slide[];
    @Input() speedes: string; // Value from click event
    public myInterval = 5000; // Default interval value from slide.html

    constructor(private slideService: SlideService) {
    }

    ngOnInit() {
        console.log("init - " + this.speedes)
        this.slideService.getSlides()
            .subscribe((slides: Slide[]) => {
                this.slides = [];
                for (var slide of slides) {
                    let dateString = slide['numericDate'];
                    let newDate = new Date(dateString);
                    let today = new Date(Date.now());
                    if (slide['location'] == 'Växjö') {
                        if (newDate > today) {
                            // console.log(newDate);
                            this.slides.push(slide);
                        }
                    }
                    this.slides.sort((obj1, obj2) => {
                        if (obj1['numericDate'] > obj2['numericDate']) {
                            return 1;
                        }

                        if (obj1['numericDate'] < obj2['numericDate']) {
                            return -1;
                        }

                        return 0;
                    });
                }
                //console.log(slides);
            });
    }

    ngOnChanges() {
        console.log('current in slide: ' + this.speedes);
    }

    slideConfig =
    {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "autoplaySpeed": this.speedes, //this.myInterval
        "infinite": true,
        "pauseOnHover": false,
        "pauseOnFocus": false,
        "accessibility": true,
        "arrows": false,
        "dots": true,
        "adaptiveHeight": true,
        "fade": true,
        // "slickSetOption": {"autoplaySpeed": this.myInterval, "refresh": true},
    };
    
}
