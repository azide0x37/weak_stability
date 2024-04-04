const express = require('express');
const router = express.Router();
const { performGlideAnalysis } = require('../services/glideAnalysisService');

router.get('/glide-analysis', (req, res) => {
  res.render('glideAnalysisForm');
});

router.post('/glide-analysis', async (req, res) => {
  // Convert input parameters from strings to numbers
  const best_glide_ratio = Number(req.body.best_glide_ratio);
  const drag_polar = Number(req.body.drag_polar);
  const weight = Number(req.body.weight);
  const V_NE = Number(req.body.V_NE);
  const V_H = Number(req.body.V_H);
  const V_G = Number(req.body.V_G);
  const V_S0 = Number(req.body.V_S0);
  const V_S1 = Number(req.body.V_S1);
  const V_FE = Number(req.body.V_FE);
  const V_APP = Number(req.body.V_APP);

  // Check if any of the parameters are NaN after conversion
  if (isNaN(best_glide_ratio) || isNaN(drag_polar) || isNaN(weight) || isNaN(V_NE) || isNaN(V_H) || isNaN(V_G) || isNaN(V_S0) || isNaN(V_S1) || isNaN(V_FE) || isNaN(V_APP)) {
    console.error('Validation error: All parameters are required and must be valid numbers.');
    return res.status(400).send('All parameters are required and must be valid numbers.');
  }

  try {
    const analysisResults = await performGlideAnalysis({
      best_glide_ratio,
      drag_polar,
      weight,
      V_NE,
      V_H,
      V_G,
      V_S0,
      V_S1,
      V_FE,
      V_APP
    });
    console.log('Glide analysis calculation completed successfully.');
    console.log('Rendering glideAnalysisResults view with the analysis results.');
    res.render('glideAnalysisResults', { analysisResults });
  } catch (error) {
    console.error('Error performing glide analysis:', error.message, error.stack);
    res.status(500).send('Error performing glide analysis');
  }
});

module.exports = router;