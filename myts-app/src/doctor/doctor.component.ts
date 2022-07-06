import { DoctorService } from "./doctor.service";
import { Init } from '../util/init'

export class DoctorComponent implements Init {
    constructor(private doctorService: DoctorService) { }
    init(): void {
        console.log(this.doctorService.findAll())
    }

}