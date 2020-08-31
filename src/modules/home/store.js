import { action,observable} from "mobx";

class HomeStore {
    @observable data = 1;

    @action.bound
    add = ()=>{
        this.data++;
    }
}

const homeStore = new HomeStore();
export default homeStore;