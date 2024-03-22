import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {PostReducer} from "./store/post/post.reducer";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/enviroments";
import {PostEffects} from "./store/post/post.effects";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {ProfileReducer} from "./store/profile/profile.reducer";
import {ProfileEffects} from "./store/profile/profile.effects";
import {AuthModule} from "./auth/auth.module";
import {PublicModule} from "./public/public.module";
import {ProfileModule} from "./profile/profile.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PublicModule,
    ProfileModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({post: PostReducer, profile: ProfileReducer}),
    EffectsModule.forRoot([PostEffects, ProfileEffects ]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
