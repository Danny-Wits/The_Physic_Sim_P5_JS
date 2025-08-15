class PhysicsObject {
  constructor(name, pos, vel, acc, mass) {
    this.id = random().toString().substring(10);
    this.name = name;
    this.pos = pos;
    this.vel = vel;
    this.mass = mass;
    this.acc = acc;
  }
  stop() {
    this.vel.x = 0;
    this.vel.y = 0;
    this.acc.x = 0;
    this.acc.y = 0;
  }
}

class PhysicsSphere extends PhysicsObject {
  constructor(name, radius, pos, vel, acc, mass, showPath, clr = "cyan") {
    super(name, pos, vel, acc, mass);
    this.radius = radius;
    this.showPath = showPath;
    this.clr = clr;
    this.path = [];
  }
  draw() {
    fill(this.clr);
    noStroke();
    circle(this.pos.x, this.pos.y, this.radius * 2);
    fill("#333");
    textAlign(CENTER, CENTER);
    textStyle("bold");
    if (this.showPath) {
      stroke(this.clr);
      strokeWeight(2);
      for (let i of this.path) {
        point(i.x, i.y);
      }
      this.path.push(createVector(this.pos.x, this.pos.y));
      if (this.path.length > 500) {
        this.path.splice(0, 1);
      }
    }
    text(this.name, this.pos.x, this.pos.y);
  }
}

class PhysicsEngine {
  constructor(gravityIntensity = 1) {
    this.gravityIntensity = gravityIntensity;
  }

  update(phyObjects) {
    for (let pObj of phyObjects) {
      pObj.acc.set(0, 0);
      //Updating Acceleration based on the gravitational pull
      for (let obj of phyObjects) {
        if (obj.id !== pObj.id) {
          let force = pObj.pos.copy().sub(obj.pos);
          let dist = force.mag();
          let strength = -1 * pObj.mass * obj.mass * this.gravityIntensity;
          force.setMag(strength / (dist * dist));
          pObj.acc.add(force);
        }
      }
      //Updating the Velocity based on the acceleration
      pObj.vel.add(pObj.acc.copy().mult(1 / (pObj.mass / 10) ** 2));
      //collision detection
      let deletions = [];
      for (let obj of phyObjects) {
        if (obj.id !== pObj.id) {
          let dist_vec = pObj.pos.copy().sub(obj.pos);
          let dist = dist_vec.mag();
          if (dist < pObj.radius + obj.radius) {
            if (obj.mass > pObj.mass) {
              obj.mass += pObj.mass;
              obj.stop();
              deletions.push(pObj);
            } else {
              pObj.mass += obj.mass;
              pObj.stop();
              deletions.push(obj);
            }
          }
        }
      }
      for (let del of deletions) {
        objects.splice(phyObjects.indexOf(del), 1);
        renderObjects();
      }
      //Updating the position based on updated velocities
      pObj.pos.add(pObj.vel);
    }
  }
}
function renderer(phyObjects) {
  for (let obj of phyObjects) {
    obj.draw();
  }
}
