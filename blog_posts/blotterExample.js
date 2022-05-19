// BLOTTER - Example 1
/*
var text = new Blotter.Text("observation", {
    family : "'EB Garamond', serif",
    size : 27,
    fill : "#202020"
  });
  
  var material = new Blotter.Material();
  
  var blotter = new Blotter(material, {
    texts : text
  });
  
  var elem = document.getElementById("blotter-text");
  var scope = blotter.forText(text);
  
  scope.appendTo(elem);*/
// BLOTTER - Example 2
var text = new Blotter.Text("How cool", {
    family: "serif",
    size: 100,
    fill: '#000000',
    paddingLeft: 40,
    paddingRight: 40
  })
  
  var text2 = new Blotter.Text("is", {
    family: "serif",
    size: 100,
    fill: 'hsl(190,100%,56%)',
    paddingLeft: 40,
    paddingRight: 40
  })
  
  var text3 = new Blotter.Text("this!", {
    family: "serif",
    size: 100,
    fill: 'hsl(305,100%,62%)',
    paddingLeft: 40,
    paddingRight: 40
  })
  
  var channel = new Blotter.ChannelSplitMaterial(),
      sliding = new Blotter.SlidingDoorMaterial(),
      rolling = new Blotter.RollingDistortMaterial()
    
  channel.uniforms.uOffset.value = 0.06
  channel.uniforms.uRotation.value = 70
  channel.uniforms.uApplyBlur.value = 1
  channel.uniforms.uAnimateNoise.value = 1
  
  sliding.uniforms.uDivisions.value = 15
  sliding.uniforms.uDivisionWidth.value = 0.2
  sliding.uniforms.uAnimateHorizontal.value = 0.3
  sliding.uniforms.uFlipAnimationDirection.value = 0.3
  
  
  var bchannel = new Blotter(channel, {
        texts: text
      }),
      bsliding = new Blotter(sliding, {
        texts: text2
      }),
      brolling = new Blotter(rolling, {
        texts: text3
      })
  
  
  var container1 = document.querySelector('.container1'),
      container2 = document.querySelector('.container2'),
      container3 = document.querySelector('.container3')
      
      
  var bScopeC = bchannel.forText(text),
      bScopeS = bsliding.forText(text2),
      bScopeR = brolling.forText(text3)
      
      
  
  bScopeC.appendTo(container1)
  bScopeS.appendTo(container2)
  bScopeR.appendTo(container3)
  

var text4 = new Blotter.Text("AsDfG", {
  family: "Poppins",
  size: 100,
  paddingLeft: 40,
  paddingRight: 40
})

var material = new Blotter.ChannelSplitMaterial();

var blotter = new Blotter(material, {
  texts: text4
})
var container4 = document.querySelector('.container4')
var scope = blotter.forText(text4)
scope.appendTo(container4)
document.onmousemove = moveEffect;
function moveEffect(event) {
  material.uniforms.uRotation.value = (event.clientY * 0.8);
  material.uniforms.uOffset.value = (event.clientY * -0.00017);
}