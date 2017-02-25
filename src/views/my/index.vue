<template>
	<div>
		<mt-header fixed title="我的信息" style='background: #ff6600;'></mt-header>
		<mt-navbar v-model="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar>

<mt-tab-container v-model="active">
  <mt-tab-container-item id="tab-container1">
    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container2">
    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container3">
    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue';
import { Header } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header);
export default{
	data(){
		return{
			active:'tab-container1'
		}
	}
}
</script>