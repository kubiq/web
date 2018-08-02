
import './components/email.component';
import './assets/styles/index.scss';

const emailEl = document.getElementById('el');
console.log(emailEl);

class Service {

    getIt() {
        return 'dkljfghudf'
    }
}


emailEl.service = new Service();
