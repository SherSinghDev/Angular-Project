import { Routes } from "@angular/router";
import { FeatureComponent } from "./feature/feature.component";
import { CardContainerComponent } from "./card-container/card-container.component";

const routConfige:Routes = [
    {
        path:"",
        component:CardContainerComponent,
        title:"cards"
    },
    {
        path:"feature",
        component:FeatureComponent,
        title:"cards"
    }
]

export default routConfige
