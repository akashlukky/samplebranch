import Controller from '@ember/controller';

export default Controller.extend({

    actions:{
        addme(){
            var name=this.get("name")
            this.store.createRecord("contacts",{
                name:name
            }).save();
        }
    }
});
