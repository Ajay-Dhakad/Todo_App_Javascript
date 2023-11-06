
        var arr = []

        // if (arr.length<0 && localStorage.getItem('todo') !== null){

        // arr.push(JSON.parse(localStorage.getItem('todo')))
        // }


        localstrg()





        let clearinp = document.querySelector('.clear')
        let savetask = document.querySelector('.btn');
        var todotitle = document.querySelector('.todotitle')
        var tododesc = document.querySelector('.tododesc')
        let alltodos = document.querySelector('.todos')
        let update = document.querySelector('#update')
        let cancel = document.querySelector('#cancel')
        let btn = document.querySelector('.btn')
        let clear = document.querySelector('.clear')



        clearinp.addEventListener('click', () => {

            todotitle.value = ''
            tododesc.value = ''



        })



        savetask.addEventListener('click', () => {

            if (todotitle.value !== '' && tododesc.value !== '') {

                let todoid = Math.random().toString(36).slice(-5);

                let b = new Date()
                let a = `${b.toLocaleTimeString()} | ${b.toLocaleDateString()}`



                let todo = {

                    id: todoid,
                    title: todotitle.value,
                    desc: tododesc.value,
                    date: a


                }

                todotitle.value = ''
                tododesc.value = ''

                // if (arr.length<0){


                // }

                arr.push(todo)

                localStorage.setItem("todo", JSON.stringify(arr));

                localstrg()

                showtodo()




            }




        })




        function localstrg() {


            if (localStorage.getItem("todo")) {
                arr = JSON.parse(localStorage.getItem("todo"))
            }


        }


        async function showtodo() {


            if (localStorage.getItem('todo')) {


                // let arr = JSON.parse(localStorage.getItem('todo'));

                let arr = JSON.parse(localStorage.getItem('todo'))

                // let a = arr.findIndex(x => x.id == 'p8fsb')
                // console.log(a,'is indx')

                arr = arr.reverse()

                alltodos.innerHTML = ''





                for (i of arr) {

                    alltodos.innerHTML +=

                        `<div class="alltodo todoanimation" id='${i.id}' >

<div id='break'>
<h1>${i.title}</h1>
<p>${i.desc}</p>
<div class='Date'>DateCreated : ${i.date}</div>
</div>
<div class="conftodo">
    <img id='${i.id}'  class="editodo hover" src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/70-512.png" alt="">
    <img id='${i.id}'  class="deltodo hover"src="https://vectorified.com/images/delete-icon-android-37.png" alt="">
</div>




</div>`

                }

            }




            deleventlistener() //runs when all all elements when created a exist in dom`
            editeventlistener()

        }


        showtodo()


        function deleventlistener() {

            var deltodo = document.querySelectorAll('.deltodo')

            deltodo.forEach(item => {

                item.addEventListener('click', (e) => {

                    e.preventDefault()

                    let id = e.target.id

                    var indx = 0

                    arr.forEach((elem) => {

                        if (elem.id == id) {

                            arr.splice(indx, 1)

                        }

                        indx += 1

                    })

                    localStorage.setItem('todo', JSON.stringify(arr))


                    showtodo()
                })

            })
        }


        function editeventlistener() {

            var editodo = document.querySelectorAll('.editodo')

            var index

            var id

            editodo.forEach(item => {

                item.addEventListener('click', (e) => {

                    e.preventDefault()

                    id = e.target.id

                    index = arr.findIndex(indx => indx.id === id)


                    todotitle.value = arr[index].title
                    tododesc.value = arr[index].desc



                    btn.style.display = 'none'
                    clear.style.display = 'none'

                    update.style.display = 'block'
                    cancel.style.display = 'block'

                    //-----------------------------------------


                    let todos = document.getElementsByClassName('todos')
                    let todoarr = Array.from(todos)

                    let elems = todoarr[0].childNodes


                    elems.forEach((e) => {

                        if (e.id !== id) {

                            e.classList.add('hide')

                        }

                    })



                })



            })



            update.addEventListener('click', () => {

                if (todotitle.value && tododesc.value) {

                    arr[index].title = todotitle.value
                    arr[index].desc = tododesc.value

                    btn.style.display = 'block'
                    clear.style.display = 'block'
                    update.style.display = 'none'
                    cancel.style.display = 'none'

                    todotitle.value = ''
                    tododesc.value = ''

                    localStorage.setItem('todo', JSON.stringify(arr))

                    showtodo()


                }



            })

            cancel.addEventListener('click', () => {


                todotitle.value = ''
                tododesc.value = ''

                btn.style.display = 'block'
                clear.style.display = 'block'
                update.style.display = 'none'
                cancel.style.display = 'none'

                showtodo()



            })



        }

