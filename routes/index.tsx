import { NavigationContainer, StackRouter } from "@react-navigation/native";
import StackRoutes from "./stack.routes";

export default function Routes(){
    return(
        <NavigationContainer>
            <StackRoutes></StackRoutes>
        </NavigationContainer>
    )
}