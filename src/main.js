import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
import './assets/main.css'
import './assets/style.css'

    import 'froala-editor/js/plugins.pkgd.min.js';
    //Import third party plugins
    import 'froala-editor/js/third_party/embedly.min';
    import 'froala-editor/js/third_party/font_awesome.min';
    import 'froala-editor/js/third_party/spell_checker.min';
    import 'froala-editor/js/third_party/image_tui.min';
    // Import Froala Editor css files.
    import 'froala-editor/css/froala_editor.pkgd.min.css';
    import 'froala-editor/css/froala_style.min.css';
    
    import VueFroala from 'vue-froala-wysiwyg';


const app = createApp(App).use(router);
app.use(VueFroala);
app.mount('#app');