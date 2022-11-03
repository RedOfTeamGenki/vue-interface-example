import {ref} from "vue";
import {ICounterLogic} from "../components/Counter.vue";

export const useChildLogic: () => ICounterLogic = () => {

    const count = ref(0)

    return {
        count
    }
}
