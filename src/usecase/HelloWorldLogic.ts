import {IHelloWorldLogic} from "../components/HelloWorld.vue";
import {ref} from "vue";
import {useCounterLogic} from "./ChildLogic";

export const useHelloWorld: (initialMessage: string)
    => IHelloWorldLogic = (initialMessage: string) => {

    const message = ref<string>(initialMessage)
    const counterLogic = useCounterLogic()

    return {
        message,
        counterLogic
    }
}
