import {IHelloWorldLogic} from "../components/HelloWorld.vue";
import {ref} from "vue";
import {ICounterLogic} from "../components/Counter.vue";

export const useHelloWorld: (initialMessage: string, counterLogic:ICounterLogic)
    => IHelloWorldLogic = (initialMessage: string, counterLogic:ICounterLogic) => {

    const message = ref<string>(initialMessage)

    return {
        message,
        counterLogic
    }
}
