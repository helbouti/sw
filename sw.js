addEventListener('push', (event)=> {    
    self.registration.showNotification('test message', {
        body: 'this is a test message',
        icon: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    });
});