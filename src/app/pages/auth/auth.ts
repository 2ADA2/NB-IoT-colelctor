import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlockHead } from '../components/block-head/block-head';

@Component({
    selector: 'app-auth',
    imports: [
        BlockHead,
        ReactiveFormsModule,
    ],
    templateUrl: './auth.html',
    styleUrl: './auth.scss',
})
export class Auth {
    private authService:AuthService = inject(AuthService);

    form: FormGroup = new FormGroup({
        username: new FormControl(""),
        password: new FormControl(""),
    });

    login() {
        this.authService.login(this.form.value).subscribe(() => {
            console.log(1);
        });
    }
}
