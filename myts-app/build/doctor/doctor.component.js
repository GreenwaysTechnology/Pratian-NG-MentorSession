export class DoctorComponent {
    constructor(doctorService) {
        this.doctorService = doctorService;
    }
    init() {
        console.log(this.doctorService.findAll());
    }
}
