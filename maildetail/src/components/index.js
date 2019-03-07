import Vue from "vue";

import MailDetail from "./MailDetail";

const Components = {
    MailDetail,
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
})

export default Components;