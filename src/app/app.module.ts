import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SlideshowModule } from 'ng-simple-slideshow';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


/* %%%%%%%%%%%%%% Service %%%%%%%%%%%%%%%%%%*/
import { ApiService } from './services/api.service';
import { CookieService } from 'ngx-cookie-service';
import { MyCookieService } from './services/my-cookie-service';
import { AuthGaurdService } from './services/auth-gaurd.service';
/* //////////////////////////////////////// */

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { RentComponent } from './rent/rent.component';
import { SellComponent } from './sell/sell.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { CompaniesComponent } from './companies/companies.component';
import { LoginComponent } from './login/login.component';
import { LocalInvestorConsultantComponent } from './local-investor-consultant/local-investor-consultant.component';
import { HomeImprovementNetworkComponent } from './home-improvement-network/home-improvement-network.component';
import { SeminarsEventsNvestorsClubComponent } from './seminars-events-nvestors-club/seminars-events-nvestors-club.component';
import { ValuationComponent } from './valuation/valuation.component';
import { RealEstateLegalFormsComponent } from './real-estate-legal-forms/real-estate-legal-forms.component';
import { PrivacyPolicyTermsComponent } from './privacy-policy-terms/privacy-policy-terms.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContractorRegistrationComponent } from './contractor-registration/contractor-registration.component';
import { OwnerFinancedNoBanksNeededComponent } from './owner-financed-no-banks-needed/owner-financed-no-banks-needed.component';
import { CompaniesRegistrationComponent } from './companies-registration/companies-registration.component';
import { RealEstateAgentRegistrationComponent } from './real-estate-agent-registration/real-estate-agent-registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyPurchaseHistoryComponent } from './my-purchase-history/my-purchase-history.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { MyOfferedServicesComponent } from './my-offered-services/my-offered-services.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';
import { OrganizationLoginComponent } from './organization-login/organization-login.component';
import { FeaturedPropertiesComponent } from './featured-properties/featured-properties.component';
import { OfferTypeRentComponent } from './offer-type-rent/offer-type-rent.component';
import { BankDetailComponent } from './bank-detail/bank-detail.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { SubmitPropertyComponent } from './submit-property/submit-property.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { ToastrModule } from 'ngx-toastr';
import { OfferTypeSellComponent } from './offer-type-sell/offer-type-sell.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PricingComponent,
    RentComponent,
    SellComponent,
    ContractorsComponent,
    CompaniesComponent,
    LoginComponent,
    LocalInvestorConsultantComponent,
    HomeImprovementNetworkComponent,
    SeminarsEventsNvestorsClubComponent,
    ValuationComponent,
    RealEstateLegalFormsComponent,
    PrivacyPolicyTermsComponent,
    AboutusComponent,
    CareersComponent,
    ContactUsComponent,
    ContractorRegistrationComponent,
    OwnerFinancedNoBanksNeededComponent,
    CompaniesRegistrationComponent,
    RealEstateAgentRegistrationComponent,
    MyPropertiesComponent,
    MyFavoritesComponent,
    MyPurchaseHistoryComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    AddServiceComponent,
    MyOfferedServicesComponent,
    ManageServicesComponent,
    OrganizationLoginComponent,
    FeaturedPropertiesComponent,
    OfferTypeRentComponent,
    BankDetailComponent,
    PropertySearchComponent,
    SubmitPropertyComponent,
    MenuHeaderComponent,
    OfferTypeSellComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    SlideshowModule,
    NgbModule,
    ToastrModule.forRoot(),
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrCZsgteqhXOaC6l8qFnki2H3GMNRAW0U'
    })
  ],
  providers: [
    ApiService,
    CookieService,
    MyCookieService, 
    AuthGaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
