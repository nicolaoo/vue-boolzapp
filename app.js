const { createApp } = Vue

const contacts= [
            {
                name: 'Michele',
                avatar: './img/myAvatar.png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/myAvatar (1).png',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/myAvatar (9).png',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/myAvatar (3).png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/myAvatar (4).png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/myAvatar (5).png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/myAvatar (6).png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/myAvatar (7).png',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
    
createApp({
    data() {
        return {
            contacts: contacts,
            currentContact: 0,
            messUser: '',
            contact: '',
            cancel: 'delete_message',
            
        }

    },

    methods:{
        changeContact(index){
            this.currentContact = index
        },
        getTextUser(){
            
            let text = this.messUser.trim()

            if (text === '' ) {
                this.newMessage = ''
                return
            }

            let newMessage = { 
                message: this.messUser,
                status: 'sent',
                date: '10/01/2020 15:51:00'
            }
            
            let messageArray = this.contacts[this.currentContact].messages

            messageArray.push(newMessage)
            console.log(messageArray)
            this.messUser = ''

            setTimeout(function (){
                
                let newMessage = { 
                    message: 'ok',
                    status: 'received',
                    date: '10/01/2020 15:51:00'
                }

                messageArray.push(newMessage) 
                
            }, 1000)
            

        },

        deleteContact(remove) {
            console.log('cancella')

            this.contacts.splice(remove, 1)
        },

        // searchContact () {
        //     console.log(this.contacts, this.contact)

        //     let nameOfContacts = this.contacts[this.currentContact].name
        //     let minContactArray = nameOfContacts.toLowerCase()
        //     let minContactUser = this.contact.toLowerCase()

        //     for(let i = 0; i < contacts.length; i++) {

        //     }

        //     if(minContactUser.includes(minContactArray)){
                
        //         console.log('è giusto perchè:', minContactArray, 'è uguale a:', minContactUser)
                
        //     } else {
                
        //         console.log('è sbagliato')
        //     }
        // },
    },

    // watch: {
    //     // whenever question changes, this function will run
    //     question(newQuestion, oldQuestion) {

    //         newQuestion = contact
    //       if (newQuestion.includes(this.contacts.name)) {
    //         this.getAnswer()
    //       }
    //     }
    //   },
}).mount('#app')