import flask 

reg_app = flask.Blueprint(
    name= "register",
    import_name= "app",
    template_folder = "registration_page/templates",
    static_folder= "registration_page/static",
    static_url_path= "/registration_page/"
)