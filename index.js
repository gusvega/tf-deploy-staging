const core = require('@actions/core');
const exec = require('@actions/exec');

async function run(){
  try{
    const workdir = core.getInput('workdir') || '.';
    const opts = { cwd: workdir };
    await exec.exec('terraform', ['init', '-input=false'], opts);
    await exec.exec('terraform', ['apply', '-auto-approve', '-input=false'], opts);
  }catch(e){
    core.setFailed(e.message);
  }
}
run();
