package com.treinamento.dosports.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;

/**
 * Class to configure new properties files.
 *
 * @author Renan Fricks
 */
@Configuration
@PropertySources({
    @PropertySource("classpath:messages.properties")
})
public class PropertiesConfig {

}
