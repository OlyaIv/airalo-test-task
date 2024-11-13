import { BasePage } from "./base.page";
import { SearchComponent } from '../components/search';
import { Page } from "@playwright/test";

export class MainPage extends BasePage {
    search: SearchComponent;
    
    constructor(page: Page) {
        super(page);
        this.search = new SearchComponent(page)
    }

    async populateSearch(country: string){
        await this.search.searchInput().click()
        await this.search.searchInput().fill(country)
    }

    async clickResults(country: string){
        await this.search.searchResultsDropdown(country).click()
    }

}
