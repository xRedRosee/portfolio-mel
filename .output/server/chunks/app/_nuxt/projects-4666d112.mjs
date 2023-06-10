import { _ as __nuxt_component_0 } from './Navbar-d7845a96.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { _ as _export_sfc, u as useRoute } from '../server.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$1 = {
  name: "ProjectCard",
  setup() {
    useRoute();
  },
  props: {
    IMG: String,
    projectcolor: String,
    ProjectName: String,
    ProjectIntro: String,
    sluglink: String
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: $props.sluglink,
    class: "project-card"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="information-section"${_scopeId}><img class="project-img"${ssrRenderAttr("src", $props.IMG)}${_scopeId}><div class="project-info"${_scopeId}><section class="project-name-section"${_scopeId}><span class="projectColor" style="${ssrRenderStyle({ "--projectcolor": $props.projectcolor })}"${_scopeId}></span><h1 class="project-name"${_scopeId}>${ssrInterpolate($props.ProjectName)}</h1></section><p class="project-intro"${_scopeId}>${ssrInterpolate($props.ProjectIntro)}</p></div></div>`);
      } else {
        return [
          createVNode("div", { class: "information-section" }, [
            createVNode("img", {
              class: "project-img",
              src: $props.IMG
            }, null, 8, ["src"]),
            createVNode("div", { class: "project-info" }, [
              createVNode("section", { class: "project-name-section" }, [
                createVNode("span", {
                  class: "projectColor",
                  style: { "--projectcolor": $props.projectcolor }
                }, null, 4),
                createVNode("h1", { class: "project-name" }, toDisplayString($props.ProjectName), 1)
              ]),
              createVNode("p", { class: "project-intro" }, toDisplayString($props.ProjectIntro), 1)
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  data() {
    return {
      projectList: []
    };
  },
  methods: {
    async getData() {
      const JsonFile = await import('./projects-225ff2c3.mjs');
      this.projectList = JsonFile.projects;
    }
  },
  mounted() {
    this.getData();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0;
  const _component_ProjectCard = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`<section class="projects" data-v-0ea64c49><h1 class="projects-h1" data-v-0ea64c49> Projects </h1><div class="project-list" data-v-0ea64c49><!--[-->`);
  ssrRenderList($data.projectList, (p) => {
    _push(ssrRenderComponent(_component_ProjectCard, {
      key: p.id,
      ProjectName: p.name,
      IMG: p.img,
      ProjectIntro: p.intro,
      projectcolor: p.color,
      sluglink: p.slug
    }, null, _parent));
  });
  _push(`<!--]--></div></section><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0ea64c49"]]);

export { projects as default };
//# sourceMappingURL=projects-4666d112.mjs.map
