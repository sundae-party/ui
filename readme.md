# Sundae ui

## Todo

- Add vscode .devcontainer
- Define color palette

## Dev

```docker
docker run -it --rm -p 3000:3000 -v $PWD:/data node bash
```

In container:
```bash
cd /data
npm install
npm run dev
```