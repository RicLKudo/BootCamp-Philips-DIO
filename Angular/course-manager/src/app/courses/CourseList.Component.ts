import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.services";


@Component({
    selector: 'app-course-list',
    templateUrl: './CourseList.Component.html'
})

export class CourseListComponent implements OnInit {

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy: string;

    constructor(private courseServive: CourseService) {}

    ngOnInit(): void {
      this._courses = this.courseServive.retrieveAll();
      this.filteredCourses = this._courses;
    }

    set filter(value:string) {
        this._filterBy = value;
        
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

    }

    get filter(){
        return this._filterBy;

    }

}