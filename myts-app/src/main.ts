//main file /entry file
import { appName, price, version, status, security } from './util/config'
import { DoctorService } from './doctor/doctor.service'
import { DoctorComponent } from './doctor/doctor.component'


function main() {
    console.log(`App Name ${appName}`)
    console.log(`App Version ${version}`)
    console.log(`App Status ${status}`)
    console.log(`App Price ${price}`)
    console.log(`Security ${security.userId} ${security.key}`)
    //Depedency Injection
    let cmp = new DoctorComponent(new DoctorService())
    cmp.init()
}
main()