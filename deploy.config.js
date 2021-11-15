module.exports = {
  projectName: "blog-app",
  cluster: [],
  prod: {
    name: "生产环境",
    script: "npm run build",
    host: "81.71.87.241",
    port: 22,
    username: "root",
    distPath: "dist",
    webDir: "/mnt/raxcl/blog",
    isRemoveRemoteFile: true,
    isRemoveLocalFile: true,
  },
};
