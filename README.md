<p align="center">
   <img width="150" height="150" src="https://i.ibb.co/MnVpyfF/logo.png" />
</p>

# vue-shell

## What is this ?

vue-shell is a component vuejs to provides an easy way to create bash terminal on your application and then add your own philosophy by adding all the commands you want with their rendering in the output.

- Navigate the history with **key-up** | **key-down**
- Clean the current terminal with **clear**
- Browse all your commands with **help**

## Installation 

```
npm i vue-shell --save
```

```js
import Vue from "vue";
import shell from 'vue-shell'
Vue.use(shell);
```

```vue
<template>
  <v-shell></v-shell>
</template>
```



## Example

```vue
<template>
  <div>
    <v-shell
      :banner="banner"
      :shell_input="send_to_terminal"
      :commands="commands"
      @shell_output="prompt()"
    ></v-shell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      send_to_terminal: "",
      banner: {
        header: "Vue Shell",
        subHeader: "Shell is power just enjoy 🔥",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
          first: "🔅",
          second: "🔆",
          time: 750
        },
        sign: "VueShell $",
        img: {
          align: "left",
          link: "/mylogo.png",
          width: 100,
          height: 100
        }
      },
      commands: [
        { name: "info",
          get() {
            return `<p>With ❤️ By Salah Bentayeb @halasproject.</p>`;
        }
        },
        {
          name: "uname",
          get() {
            return navigator.appVersion;
          }
        }
      ]
    };
  },
  methods: {
    prompt(value) {
      if (value == "node -v") {
        this.send_to_terminal = process.versions.node;
      }
    }
  }
};
</script>

<style>
</style>
```



## API

| Props       | Type   | Required |
| ----------- | ------ | -------- |
| banner      | Object | false    |
| commands    | Array  | false    |
| shell_input | String | false    |

| Event        | Type | Required |
| ------------ | ---- | -------- |
| shell_output | Any  | false    |

#### banner 

```js
{
    header: String,
	subHeader: String,
	helpHeader: String,
	sign: String,
	img: {
   		align: left | right,
  		link: String,
    	width: Number,
    	height: Number }
	emoji: {
    	first: "🔅",
    	second: "🔆",
    	time: Number (ms) }
}
```

#### commands

```javascript
[
  { name: String,
    get() {
       return String | HTML;
    }
  }
]
```

