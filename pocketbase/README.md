# Pocketbase config for SaaS App with Appsmith


## How to use

1. Clone this repository
2. Enter the pocketbase directory: `cd pocketbase`
3. Download and unzip pocketbase from the [official docs](https://pocketbase.io/docs/)
4. Check if you unzipped correctly. You should now see a single executable called "pocketbase" in the repository/pocketbase directory
5. Run `./pocketbase serve`
6. Go to `http://127.0.0.1:8090/_/`
7. Create your admin user and go to Collections. You should see a configuration collection created with a basic config for your app. This collection was created automatically when you first ran pocketbase, it was created from the pb_migrations directory.
8. Click on the configuration record and upload a logo


## Running locally and exposing via ngrok

You can run pocketbase locally and expose it publicly via ngrok. This is useful for testing. You can download ngrok [here](https://ngrok.com/download)

Once you have it, you can run:

```
ngrok http http://127.0.0.1:8090/
```

You will get an ngrok URL, remember it for Appsmith
