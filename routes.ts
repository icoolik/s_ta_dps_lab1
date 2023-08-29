import Main from "./src/pages/Main";
import PokemonItemDetails from "./src/pages/PokemonItemDetails";

export const MAIN_ROUTE: string = '/';

export const routes = [
  {
    path: MAIN_ROUTE,
    component: Main
  },
  {
    path: MAIN_ROUTE + "/:name",
    component: PokemonItemDetails
  }
];