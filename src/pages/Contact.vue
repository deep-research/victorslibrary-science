<template>
  <Layout>
    <h1 class="mb-4">Contact</h1>
    <div>
      <img class="contact-image mb-5" style="max-width: 200px" src="../../uploads/email.svg" />
      <div style="display: none">Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <b-form 
        name="contact"
        method="post"
        @submit.prevent="handleSubmit"
        action="/success/"
      >
      <input type="hidden" name="name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
        <b-form-group id="input-group-1" label="Name:" label-for="form-name">
          <b-form-input
            id="name"
            name="name"
            v-model="form.name"
            placeholder="Enter name"
          />
          <div style="color: red" v-if="this.validation.nameError">Please enter your name.</div>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Email:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            name="email"
            placeholder="Enter email"
          />
          <div style="color: red" v-if="this.validation.emailError">Please enter a valid email address.</div>
        </b-form-group>

        <b-form-group id="input-group-3" label="Subject:" label-for="form-subject">
          <b-form-input
            id="subject"
            name="subject"
            v-model="form.subject"
            placeholder="Enter subject"
          />
          <div style="color: red" v-if="this.validation.subjectError">Please enter a subject.</div>
        </b-form-group>

        <b-form-group id="input-group-4" label="Message:" label-for="message">
          <b-form-textarea
            id="message"
            name="message"
            v-model="form.message"
            placeholder="Enter message"
          />
          <div style="color: red" v-if="this.validation.messageError">Please enter a message.</div>
        </b-form-group>

        <div style="margin-bottom: 16px;">
          <vue-recaptcha
            sitekey="6LedCfgZAAAAAG4kM-xeTLM4HERd8MIPs5Gwl_4d"
            type="checkbox"
            :loadRecaptchaScript="true"
            @verify="onVerify">
          </vue-recaptcha>
          <div style="color: red" v-if="this.validation.captchaError">Please fill out the Captcha.</div>
        </div>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>
  </Layout>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';

  export default {
    components: { VueRecaptcha },
    metaInfo: {
      title: 'Contact'
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: '',
        },
        validation: {
          human: false,
          captchaError: false,
          nameError: false,
          emailError: false,
          subjectError: false,
          messageError: false
        }
      }
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      },
      validate () {
        let validated = true
         if (this.validation.human) {
           this.validation.captchaError = false
         } else {
           this.validation.captchaError = true
           validated = false
         }

        if (this.form.name) {
          this.validation.nameError = false
        } else {
           this.validation.nameError = true
           validated = false          
        }

        const validateEmail = () => {
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(this.form.email);
        }

        if (this.form.email && validateEmail()) {
          this.validation.emailError = false
        } else {
           this.validation.emailError = true
           validated = false          
        }

        if (this.form.subject) {
          this.validation.subjectError = false
        } else {
           this.validation.subjectError = true
           validated = false          
        }

        if (this.form.message) {
          this.validation.messageError = false
        } else {
           this.validation.messageError = true
           validated = false          
        }

        if (validated) {
          return true
        } else {
          return false
        }
      },
      handleSubmit(e) {
        if (this.validate()) {
          fetch('https://script.google.com/macros/s/AKfycbzDGkzPLoG03HKiXHhu-l0c_6g_HUei7kQ1ALvqfIO5woSnl5tmTuJhuvvVVx4dDQXdAQ/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: this.encode({
              'form-name': e.target.getAttribute('name'),
              ...this.form,
            }),
          })
          .then(() => this.$router.push('/success'))
          .catch(error => alert(error))
        }
      },
      onVerify (response) {
        if (response) {
          this.validation.human = true
        }
      } 
    }
  }
</script>

<style scoped lang="scss">
.contact-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}

form {
  font-size: 17px;
}
</style>
