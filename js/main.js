new Vue({
    data: {
        questions,
        index: 0,
        show: false,
        verify: false
    },
    methods: {
        _addClass(className, index) {
            var a = this.$refs.answer;
            if (!this.show && !this.verify) {
                if (this.questions[this.index].answers.length === 2) index === 0 ? rm(0, 1) : rm(1, 0);
      					else a[index].classList.toggle(className);
            }

            function rm(i, j) {
              a[i].classList.toggle(className);
              a[j].classList.remove(className);
            }
        },
        _prec() {
            if (this.index - 1 != -1) this.index--;

            this.show = false;
            this.verify = false;
        },
        _next() {
            if (this.index + 1 != this.questions.length) this.index++;

            this.show = false;
            this.verify = false;
        },
        _show() {
            if (!this.verify) {
                this.show = !this.show;
                var a = this.$refs.answer;
                this.questions[this.index].answers.forEach((el, i) => {
                   a[i].classList.toggle(el[1] ? "true" : "init");
                });
            }
        },
        _verify() {
            if (!this.show) {
                var a = this.$refs.answer;
                this.questions[this.index].answers.forEach((el, i) => {
                  let isChecked = a[i].classList.contains("checked");
                  if (el[1] === 1 || isChecked) {
                    if (el[1] === 1 && isChecked) toggle("true", i);
                    else toggle(isChecked ? "false" : "not--included", i);
                  }
                });

                function toggle(className, i) {
                  a[i].classList.toggle(className);
                }

                this.verify = !this.verify;
            }
        },
        _reset() {
            this.show = false;
            this.verify = false;
            for (var i = 0; i < this.questions[this.index].answers.length; i++) {
              if(this.$refs.answer[i]) this.$refs.answer[i].className = 'answer';
            }
            this.questions[this.index].answers.sort(() => 0.5 - Math.random());
        }
    },
    watch: {
      index: function() {
        this._reset();
      }
    },
    created() {
        this.questions.forEach(el => {
          el.answers.sort(() => 0.5 - Math.random());
        });
    }
}).$mount('#app');
