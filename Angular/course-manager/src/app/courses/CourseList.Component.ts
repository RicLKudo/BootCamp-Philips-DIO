import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector: 'app-course-list',
    templateUrl: './CourseList.Component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: './assets/images/forms.png',
                price: 99.99,
                code: 'OPT_876',
                durating: 120,
                rating: 4.3,
                releaseDate: 'November, 12, 2020'
            },
            {
                id: 2,
                name: 'Angular: HTTP ',
                imageUrl: './assets/images/http.png',
                price: 54.99,
                code: 'OPT_877',
                durating: 80,
                rating: 4,
                releaseDate: 'November, 20, 2020'
            }

        ]
    }

}