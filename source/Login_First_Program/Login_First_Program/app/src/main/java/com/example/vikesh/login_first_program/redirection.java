
package com.example.vikesh.login_first_program;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.webkit.WebView;
import android.widget.TextView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Headers;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class redirection extends AppCompatActivity {

    String API_URL = "https://api.fullcontact.com/v2/person.json?";
    String API_KEY = "b29103a702edd6a";
    String source_value;
    TextView output_value;
    TextView outputTextView;
    Context mContext;
    String sourceText;
    WebView weatherInfo;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_redirection);
        mContext = getBaseContext();
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        outputTextView = (TextView) findViewById(R.id.result_value);
        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
    }
    public void logout(View v) {
        Intent redirect = new Intent(redirection.this, MainActivity.class);
        startActivity(redirect);
    }

    private void hideKeyboard(View editableView) {
        InputMethodManager imm = (InputMethodManager)mContext
                .getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(editableView.getWindowToken(), 0);
    }
    public void translateText(View v)
    {
        TextView sourceTextView = (TextView) findViewById(R.id.txt_Email);
        sourceText = sourceTextView.getText().toString();

        String getURL = "http://apilayer.net/api/live?" +
                "access_key=eff10b226f68b2955a5cdea077aaea31" +
                "&" +"currencies=" + sourceText +"&" +
                "format=1";
        Log.d("country",sourceText);
        Log.d("COuntry  URL",getURL);
        final String response1 = "";
        OkHttpClient client = new OkHttpClient();

        try {

            Request request = new Request.Builder()
                    .url(getURL)
                    .build();

            client.newCall(request).enqueue(new Callback() {

                @Override
                public void onFailure(Call call, IOException e) {
                    System.out.println(e.getMessage());
                }


                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    final JSONObject jsonResult;
                    final String result = response.body().string();

                    try {
                        jsonResult = new JSONObject(result);
                        String value="USD".concat(sourceText);
                        //JSONArray convertedTextArray = jsonResult.getJSONArray("source");
                        String convertedTextArray = jsonResult.getString("quotes");
                        //int value=convertedTextArray.get()
                        //final String convertedText = convertedTextArray.get(0).toString();
                        final String convertedText = convertedTextArray;
                        String mainvalue1=convertedText.substring(convertedText.lastIndexOf(":") + 1);
                        String mainvalue=mainvalue1;
                        /*String finalvaluewithspecial=mainvalue.replaceAll("}","");
                       Log.d("final value",finalvaluewithspecial);*/
                        String fn=mainvalue.substring(0,8);
                        Log.d("please",fn);
                        Log.d("mainvalue",mainvalue1);
                        Log.d("source value",convertedText);
                        Log.d("Country....",convertedText);
                        //  final int valueconverted=convertedTextArray.get(0).
                        // int num=Integer.parseInt(convertedText);
                        Log.d("okHttp", jsonResult.toString());
                        //convertedText=mainvalue;;
                        //final String valueofmoney=mainvalue1;
                        final String valueofmoney=fn;
                        runOnUiThread(new Runnable() {
                            @Override
                            public void run() {
                                hideKeyboard(outputTextView);
                                //outputTextView.setText(convertedText);
                                outputTextView.setText(valueofmoney);
                            }
                        });

                    } catch (JSONException e) {
                        e.printStackTrace();
                    }

                }
            });


        }  catch (Exception ex) {
            outputTextView.setText(ex.getMessage());
        }

    }
}