var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const myFetchData = (endpoint_1, ...args_1) => __awaiter(void 0, [endpoint_1, ...args_1], void 0, function* (endpoint, options = null) {
    let response = "";
    try {
        response = yield fetch(endpoint, options);
        console.log(response);
        if (response.ok) {
            const json = yield response.json();
            return json;
        }
    }
    catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
});
